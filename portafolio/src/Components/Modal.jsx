"use client"

import { useState, useEffect, useRef } from "react"

export function Modal({
  title = "🚀 ¡Actualización en progreso!",
  message = "Estamos mejorando la página. ¡Gracias por tu paciencia!",
  buttonText = "Aceptar",
  storageKey = "updateModalShown",
  showOnce = true,
  onClose = null,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
 
  const backdropRef = useRef(null)
  const modalRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const hasSeenModal = localStorage.getItem(storageKey)
    if (!showOnce || !hasSeenModal) {
      openModal()
    }
  }, [storageKey, showOnce])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeModal()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
      buttonRef.current?.focus()
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const openModal = () => {
    setIsOpen(true)
    setTimeout(() => setIsVisible(true), 10)
  }

  const closeModal = () => {
    setIsVisible(false)
    setTimeout(() => {
      setIsOpen(false)
      if (showOnce) {
        localStorage.setItem(storageKey, "true")
      }
      if (onClose) {
        onClose()
      }
    }, 300)
  }

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      closeModal()
    }
  }

  Modal.open = openModal

  if (!isOpen) return null

  return (
    <div
      ref={backdropRef}
      className={`fixed inset-0 transition-all duration-300 ease-in-out z-50 backdrop-blur-sm bg-white/30 dark:bg-gray-900/90`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          ref={modalRef}
          className={`transition-all duration-300 ease-in-out transform ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="rounded-lg shadow-xl border w-full max-w-md mx-auto overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            
            {/* Header */}
            <div className="p-6 pb-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700">
              <div className="flex items-center justify-between">
                <h2 id="modal-title" className="text-xl font-bold">
                  {title}
                </h2>
                <button
                  onClick={closeModal}
                  className="h-8 w-8 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Cerrar modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-4">
              <p className="text-gray-700 dark:text-gray-300">{message}</p>
            </div>

            {/* Footer */}
            <div className="p-6 pt-2 flex justify-center bg-gray-50 dark:bg-gray-900">
              <button
                ref={buttonRef}
                onClick={closeModal}
                className="px-8 py-2.5 text-white rounded-md font-medium transition-all shadow-md 
                hover:shadow-lg active:scale-95 bg-gradient-to-r from-blue-500 to-purple-600 
                hover:from-blue-600 hover:to-purple-700 dark:from-indigo-600 dark:to-purple-700 
                dark:hover:from-indigo-700 dark:hover:to-purple-800"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Método para abrir el modal programáticamente
Modal.show = () => {
  if (typeof Modal.open === "function") {
    Modal.open()
  } else {
    console.warn("Modal no está montado aún")
  }
}
