import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="section">
      <div className="container">
        <h3 className="mb-3">Contact</h3>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={(e)=>{ e.preventDefault(); alert("Message sent (demo)"); }}>
              <div className="form-group">
                <input name="name" value={form.name} onChange={handle} className="form-control" placeholder="Name" />
              </div>
              <div className="form-group">
                <input name="email" value={form.email} onChange={handle} className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea name="msg" value={form.msg} onChange={handle} className="form-control" rows="4" placeholder="Message" />
              </div>
              <button className="btn btn-primary">Send</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="card p-3">
              <h5>Store Information</h5>
              <p className="text-muted">Email: support@example.com<br/>Phone: +91 98765 43210</p>
              <p className="text-muted">Address: 123 Market Street, Mumbai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
