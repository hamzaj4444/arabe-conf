"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { Menu, X } from "lucide-react";

export const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: { ar: "الرئيسية", fr: "Accueil" } },
    { id: "about", label: { ar: "حول المؤتمر", fr: "À propos" } },
    { id: "objectives", label: { ar: "الأهداف", fr: "Objectifs" } },
    { id: "program", label: { ar: "البرنامج", fr: "Programme" } },
    { id: "committees", label: { ar: "اللجان", fr: "Comités" } },
    { id: "registration", label: { ar: "التسجيل", fr: "Inscription" } },
    { id: "contact", label: { ar: "اتصل بنا", fr: "Contact" } },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-border shadow-academic"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with darker blue background */}
          <div className="flex items-center">
            <span className="bg-indigo-800 bg-opacity-80 text-white px-4 py-2 rounded-lg text-base font-bold">
              {t({ ar: "مؤتمر اللغة العربية", fr: "Conférence Arabe" })}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:bg-indigo-800 hover:text-white px-3 py-1 rounded-md transition-all duration-200 font-medium"
              >
                {t(item.label)}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:bg-indigo-800 hover:text-white rounded-md transition-colors duration-200"
                >
                  {t(item.label)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
