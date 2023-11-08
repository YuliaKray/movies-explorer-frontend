import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css"

export function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <p className="not-found__back" onClick={() => navigate(-1)}>Назад</p>
    </section>
  )
}