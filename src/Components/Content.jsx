import { useState } from "react";
import { motion } from "framer-motion";
import BlurText from "../TextAnimations/BlurText";
import Carousel from "./Carousel";
import CountUp from "./CountUp";
import Form from "./Form";
import { Building2, ShieldCheck, Clock, Lightbulb, HardHat, Star, ChevronRight, Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const stats = [
  { value: 500, suffix: "+", label: "Projets Réalisés", icon: Building2 },
  { value: 15, suffix: " ans", label: "D'Expérience", icon: Clock },
  { value: 50, suffix: "+", label: "Professionnels", icon: HardHat },
  { value: 98, suffix: "%", label: "Clients Satisfaits", icon: Star },
];

const values = [
  { icon: ShieldCheck, title: "Qualité", desc: "Des matériaux premium et un savoir-faire d'excellence pour chaque projet." },
  { icon: Clock, title: "Ponctualité", desc: "Respect rigoureux des délais convenus, sans compromis." },
  { icon: Lightbulb, title: "Innovation", desc: "Technologies modernes et méthodes de construction innovantes." },
  { icon: HardHat, title: "Sécurité", desc: "Normes de sécurité strictes sur tous nos chantiers." },
];

const testimonials = [
  { name: "Amadou Diallo", role: "Promoteur immobilier", text: "Bati-Pro a transformé notre vision en réalité. Un professionnalisme remarquable du début à la fin du projet." },
  { name: "Fatoumata Traoré", role: "Propriétaire", text: "Je recommande Bati-Pro les yeux fermés. Qualité irréprochable et équipe très réactive." },
  { name: "Ibrahim Keïta", role: "Architecte", text: "Collaborer avec Bati-Pro est un vrai plaisir. Ils comprennent les plans et exécutent avec précision." },
];

export default function A_propos() {
  const [ShowCard,SetshowCard] = useState(false)
  return (
    <div id="Accueil" >
      {/* ===== HERO ===== */}
      <div className="relative h-[60vh] bg-[url('/bg1.jpg')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70 flex flex-col justify-center items-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-300 font-medium text-sm tracking-widest uppercase">Découvrez Bati-Pro</span>
          </motion.div>
          <div className="px-4 w-full text-center">
            <BlurText text="À propos de nous" className="flex justify-center items-center text-center font-bold text-4xl md:text-5xl lg:text-6xl text-white" />
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white/70 text-lg mt-4 max-w-xl text-center px-4">
            Bâtir l'avenir, un projet à la fois.
          </motion.p>
        </div>
      </div>

      {/* ===== QUI SOMMES-NOUS ===== */}
      <section id="a-propos" className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-b from-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="space-y-6">
            <motion.span variants={fadeUp} custom={0} className="text-blue-500 font-semibold text-sm tracking-widest uppercase">Notre histoire</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
              Qui sommes-nous<span className="text-blue-500">  ?</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="w-16 h-1 bg-linear-to-r from-blue-500 to-blue-700 rounded-full" />
            <motion.p variants={fadeUp} custom={3} className="text-blue-500 text-lg leading-relaxed">
              <strong className="text-blue-500">Bati-Pro</strong> est une entreprise de construction de référence, fondée avec la vision de transformer le paysage urbain à travers des réalisations durables et de haute qualité.
            </motion.p>
            <motion.p variants={fadeUp} custom={4} className="text-blue-500 text-lg leading-relaxed">
              Depuis notre création, nous avons accompagné des centaines de clients dans la concrétisation de leurs projets : résidences, bâtiments commerciaux, infrastructures publiques et rénovations complètes.
            </motion.p>
            <motion.div variants={fadeUp} custom={5} className="flex gap-4 pt-2">
              <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40">
                Contactez-nous <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/5">
              <Carousel />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-600/5 rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ===== CHIFFRES CLÉS ===== */}
      <section id="services" className="py-16 px-4 bg-linear-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center text-3xl font-bold text-white mb-12">
            Nos Chiffres <span className="text-blue-300">Parlent</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <s.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-blue-200/70 text-sm font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOS VALEURS ===== */}
      <section className="py-20 px-4 md:px-8 bg-linear-to-b from-blue-900 to-blue-950">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.span variants={fadeUp} custom={0} className="text-blue-500 font-semibold text-sm tracking-widest uppercase">Ce qui nous anime</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-white mt-3">
              Nos <span className="text-blue-500">Valeurs</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="w-16 h-1 bg-linear-to-r from-blue-500 to-blue-700 rounded-full mx-auto mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
                <div className="w-14 h-14 bg-blue-600/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600/25 transition-colors">
                  <v.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POURQUOI NOUS CHOISIR ===== */}
      <section id="Avantage concurrentiel"  className="py-20 px-4 md:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="/bg2.jpg" alt="Chantier Bati-Pro" className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-blue-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-xl font-bold">Construisons ensemble votre avenir</p>
              <p className="text-blue-200/70 text-sm mt-1">Des projets qui durent dans le temps</p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="space-y-6">
            <motion.span variants={fadeUp} custom={0} className="text-blue-500 font-semibold text-sm tracking-widest uppercase">Nos avantages</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Pourquoi choisir <span className="text-blue-500">Bati-Pro ?</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="w-16 h-1 bg-linear-to-r from-blue-500 to-blue-700 rounded-full" />
            {[
              "Équipe certifiée et hautement qualifiée",
              "Matériaux de construction de première qualité",
              "Garantie décennale sur tous nos travaux",
              "Suivi transparent et communication régulière",
              "Respect strict des normes de sécurité",
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 3} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600/40 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-gray-300 text-base">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TÉMOIGNAGES ===== */}
      <section id="Temoignage" className="py-20 px-4 md:px-8 bg-linear-to-b from-gray-950 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.span variants={fadeUp} custom={0} className="text-blue-500 font-semibold text-sm tracking-widest uppercase">Témoignages</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-white mt-3">
              Ce que disent nos <span className="text-blue-500">Clients</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="w-16 h-1 bg-linear-to-r from-blue-500 to-blue-700 rounded-full mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 relative">
                <Quote className="w-8 h-8 text-blue-500/20 absolute top-4 right-4" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-blue-400/70 text-sm">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed italic">"{t.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id='contact' className="py-20 px-4 bg-linear-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Bg.jpg')] bg-cover bg-center opacity-10" />
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-blue-200/70 text-lg mb-8 max-w-xl mx-auto">
            Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Demander un devis <ChevronRight className="w-5 h-5" />
            </a>
            <button onClick={() => SetshowCard(!ShowCard)} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300">
              Contacter-nous
            </button>
          </div>
          {ShowCard && (
            <div className="mt-8 flex justify-center w-full px-4">
              <Form />
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
