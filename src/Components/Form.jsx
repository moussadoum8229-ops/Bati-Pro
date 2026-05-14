import React from 'react'

export default function Form() {
  return (
    <div>
       <form  action="https://formspree.io/f/xjglqgdn" method="POST"
       
       className="w-full max-w-md mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg space-y-5 animate-heartbeat">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Contacter - nous
          </h1>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom
            </label>
            <input
              type="username"
              placeholder="Entrez votre Nom "
              className="w-full px-4 py-2 rounded-xl text-black border cursor-pointer border-gray-300 "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prenom
            </label>
            <input
              type="prenom"
              placeholder="Entrez votre prenom"
              className="w-full px-4 py-2 rounded-xl text-black border cursor-pointer border-gray-300 "
            />
          </div>

           <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Numero de telephone
            </label>
            <input
              type="prenom"
              placeholder="Entrez votre prenom"
              className="w-full px-4 py-2 rounded-xl text-black border cursor-pointer border-gray-300 "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              type="message"
              placeholder="Entrez votre message"
              className="w-full px-4 py-2 h-24 rounded-xl text-black border cursor-pointer border-gray-300 "
            />
          </div>

          <button 
            type="submit"
            className=" w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Envoyer
          </button>

        </form>
    </div>
  )
}
