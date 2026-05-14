import React from "react";
import {useForm, ValidationError} from "@formspree/react"

export default function Form() {
  const [state, handleSubmit] = useForm("xnjwkzwo");
  if (state.succeeded) {
    return <p>Message envoyer avec succès</p>;
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg space-y-5 animate-heartbeat"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Contacter - nous
        </h1>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom
          </label>
          <input
            id="nom"
            type="text"
            name="nom"
            placeholder="Entrez votre Nom "
            className="w-full px-4 py-2 rounded-xl text-black border cursor-pointer border-gray-300 "
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prenom
          </label>
          <input
            id="prenom"
            type="text"
            name="prenom"
            placeholder="Entrez votre prenom"
            className="w-full px-4 py-2 rounded-xl text-black border cursor-pointer border-gray-300 "
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Numero de telephone
          </label>
          <input
            id="contact"
            type="text"
            name="contact"
            placeholder="Entrez votre prenom"
            className="w-full px-4 py-2 rounded-xl text-black border cursor-pointer border-gray-300 "
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Entrez votre message"
            className="w-full px-4 py-2 h-24 rounded-xl text-black border cursor-pointer border-gray-300 "
          />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className=" w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
