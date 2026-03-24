"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const t = useTranslations("QuoteForm");
  
  const projectTypes = [
    { id: "commercial", label: t("type_comm"), icon: "🏢", desc: t("type_comm_desc") },
    { id: "residential", label: t("type_res"), icon: "🏘️", desc: t("type_res_desc") },
    { id: "industrial", label: t("type_ind"), icon: "🏭", desc: t("type_ind_desc") },
    { id: "infrastructure", label: t("type_inf"), icon: "🌉", desc: t("type_inf_desc") },
    { id: "renovation", label: t("type_ren"), icon: "🏛️", desc: t("type_ren_desc") },
    { id: "other", label: t("type_oth"), icon: "📋", desc: t("type_oth_desc") },
  ];

  const [formData, setFormData] = useState({
    type: "",
    size: "",
    budget: "",
    location: "",
    date: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    summary: "",
  });

  const updateForm = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step === 1 && !formData.type) return; 
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="rounded-[32px] border border-ink/5 bg-white p-8 md:p-12 shadow-card relative overflow-hidden">
      {/* Progress Bar Container */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-surface">
         <div 
           className="h-full bg-gold transition-all duration-500 ease-out"
           style={{ width: `${(step / 4) * 100}%` }}
         ></div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] rtl:tracking-normal font-semibold text-ink/40">
          <span className={step >= 1 ? "text-gold" : ""}>01. {t("step1")}</span>
          <span className="w-4 h-[1px] bg-ink/10"></span>
          <span className={step >= 2 ? "text-gold" : ""}>02. {t("step2")}</span>
          <span className="w-4 h-[1px] bg-ink/10"></span>
          <span className={step >= 3 ? "text-gold" : ""}>03. {t("step3")}</span>
          <span className="w-4 h-[1px] bg-ink/10"></span>
          <span className={step >= 4 ? "text-gold" : ""}>04. {t("step4")}</span>
        </div>
      </div>

      <div className="min-h-[400px]">
        {/* Step 1: Project Type */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
               <h3 className="text-2xl font-display text-ink">{t("s1_title")}</h3>
               <p className="text-ink/60 mt-2">{t("s1_desc")}</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => updateForm("type", type.id)}
                  className={`group relative flex flex-col items-start rounded-[20px] border p-6 text-left transition-all duration-300 ${
                    formData.type === type.id
                      ? "border-gold bg-gold/5 shadow-[0_0_20px_rgba(201,169,110,0.15)] scale-[1.02]"
                      : "border-ink/10 bg-white hover:border-gold/50 hover:bg-surface"
                  }`}
                >
                  <span className="text-3xl mb-4 group-hover:scale-110 transition-transform">{type.icon}</span>
                  <p className="text-lg font-semibold text-ink">{type.label}</p>
                  <p className="mt-1 text-xs text-ink/60">{type.desc}</p>
                  
                  {formData.type === type.id && (
                    <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto text-gold">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Project Scope */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
               <h3 className="text-2xl font-display text-ink">{t("s2_title")}</h3>
               <p className="text-ink/60 mt-2">{t("s2_desc")}</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/70">{t("label_size")}</label>
                <input 
                  value={formData.size}
                  onChange={(e) => updateForm("size", e.target.value)}
                  className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-ink placeholder:text-ink/30" 
                  placeholder={t("placeholder_size")}
                  dir="ltr"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/70">{t("label_budget")}</label>
                <select 
                  value={formData.budget}
                  onChange={(e) => updateForm("budget", e.target.value)}
                  className="w-full bg-surface border border-ink/10 rounded-xl px-4 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-ink"
                >
                  <option value="" disabled>{t("placeholder_budget")}</option>
                  <option value="5-15">$5M - $15M</option>
                  <option value="15-50">$15M - $50M</option>
                  <option value="50-150">$50M - $150M</option>
                  <option value="150+">$150M+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/70">{t("label_location")}</label>
                <input 
                  value={formData.location}
                  onChange={(e) => updateForm("location", e.target.value)}
                  className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-ink placeholder:text-ink/30" 
                  placeholder={t("placeholder_location")} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/70">{t("label_date")}</label>
                <input 
                  type="date" 
                  value={formData.date}
                  onChange={(e) => updateForm("date", e.target.value)}
                  className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-ink placeholder:text-ink/30" 
                  dir="ltr"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
             <div>
               <h3 className="text-2xl font-display text-ink">{t("s3_title")}</h3>
               <p className="text-ink/60 mt-2">{t("s3_desc")}</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/70">{t("label_name")}</label>
                <input 
                  value={formData.name}
                  onChange={(e) => updateForm("name", e.target.value)}
                  className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-ink placeholder:text-ink/30" 
                  placeholder={t("placeholder_name")} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/70">{t("label_company")}</label>
                <input 
                  value={formData.company}
                  onChange={(e) => updateForm("company", e.target.value)}
                  className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-ink placeholder:text-ink/30" 
                  placeholder={t("placeholder_company")} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/70">{t("label_email")}</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => updateForm("email", e.target.value)}
                  className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-ink placeholder:text-ink/30" 
                  placeholder={t("placeholder_email")}
                  dir="ltr"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/70">{t("label_phone")}</label>
                <input 
                  value={formData.phone}
                  onChange={(e) => updateForm("phone", e.target.value)}
                  className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-ink placeholder:text-ink/30" 
                  placeholder={t("placeholder_phone")}
                  dir="ltr"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/70">{t("label_summary")}</label>
                <textarea 
                  value={formData.summary}
                  onChange={(e) => updateForm("summary", e.target.value)}
                  className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-ink placeholder:text-ink/30 resize-none" 
                  rows={4}
                  placeholder={t("placeholder_summary")}
                ></textarea>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {step === 4 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
               <h3 className="text-2xl font-display text-ink">{t("s4_title")}</h3>
               <p className="text-ink/60 mt-2">{t("s4_desc")}</p>
            </div>
            
            <div className="rounded-[24px] border border-ink/5 bg-surface p-8">
               <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                  <div>
                     <p className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-ink/40 mb-1">{t("rev_type")}</p>
                     <p className="font-semibold text-ink">{projectTypes.find(t => t.id === formData.type)?.label || t("not_specified")}</p>
                  </div>
                  <div>
                     <p className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-ink/40 mb-1">{t("rev_budget")}</p>
                     <p className="font-semibold text-ink" dir="ltr">{formData.budget || t("not_specified")}</p>
                  </div>
                  <div className="col-span-2">
                     <p className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-ink/40 mb-1">{t("rev_loc")}</p>
                     <p className="font-semibold text-ink">{formData.location || t("not_specified")}</p>
                  </div>
                  <div>
                     <p className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-ink/40 mb-1">{t("rev_name")}</p>
                     <p className="font-semibold text-ink">{formData.name || t("not_specified")}</p>
                  </div>
                  <div>
                     <p className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-ink/40 mb-1">{t("rev_email")}</p>
                     <p className="font-semibold text-ink" dir="ltr">{formData.email || t("not_specified")}</p>
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between border-t border-ink/5 pt-8">
        <div>
          {step > 1 && (
            <button 
               onClick={prevStep}
               className="text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-ink/50 hover:text-ink transition-colors flex items-center gap-2"
            >
               <span className="rtl:rotate-180">←</span> {t("nav_back")}
            </button>
          )}
        </div>
        
        <div>
           {step < 4 ? (
             <Button 
               onClick={nextStep} 
               variant="primary"
               disabled={step === 1 && !formData.type}
               className={step === 1 && !formData.type ? "opacity-50 cursor-not-allowed" : ""}
             >
               {t("nav_cont")} <span className="ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180">→</span>
             </Button>
           ) : (
             <Button variant="primary">{t("nav_sub")}</Button>
           )}
        </div>
      </div>
    </div>
  );
}

