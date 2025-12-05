import React from "react";

const posts = [
  { id: 1, title: "How to choose the right frame", excerpt: "Tips to pick frames that suit your face." },
  { id: 2, title: "Care for your lenses", excerpt: "Simple steps to keep lenses scratch free." }
];

export default function Blog() {
  return (
    <section id="blog" className="section bg-dark">
      <div className="container">
        <h3 className="mb-3">Blog</h3>
        <div className="row">
          {posts.map(p => (
            <div key={p.id} className="col-md-6">
              <div className="card p-3 mb-3">
                <h5>{p.title}</h5>
                <p className="text-muted">{p.excerpt}</p>
                <a href="#blog" className="btn btn-sm btn-outline-light">Read</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
