(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=(c,o)=>{c.forEach(s=>{s.addEventListener("click",()=>{s.classList.toggle(o)})})},l=document.querySelector(".header__hamburger"),a=document.querySelector(".header__menu_mobile");l==null||l.addEventListener("click",()=>{a==null||a.classList.toggle("header__menu_active")});const r=document.querySelector(".header__langs"),n=r==null?void 0:r.querySelectorAll(".header__lang");n==null||n.forEach(c=>{c.addEventListener("click",o=>{if(o.preventDefault(),c.classList.contains("header__lang_selected")){c.classList.remove("header__lang_selected"),r==null||r.classList.toggle("header__langs_active");return}n.forEach(s=>s.classList.remove("header__lang_selected")),c.classList.add("header__lang_selected"),r==null||r.classList.remove("header__langs_active")})});u(document.querySelectorAll(".faq__question"),"faq__question_active");
