import React from "react";

const faq = [
  { q: "What is the return policy?", a: "You can return within 14 days, unused." },
  { q: "Do you ship internationally?", a: "Yes — international shipping is available." },
  { q: "What payment methods are supported?", a: "Card, UPI and netbanking." }
];

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <h3 className="mb-3">Frequently asked</h3>
        <div id="accordion">
          {faq.map((f,i) => (
            <div className="card mb-2" key={i}>
              <div className="card-header p-2">
                <a className="card-link" data-toggle="collapse" href={`#faq${i}`}>{f.q}</a>
              </div>
              <div id={`faq${i}`} className={`collapse ${i===0?'show':''}`} data-parent="#accordion">
                <div className="card-body">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
