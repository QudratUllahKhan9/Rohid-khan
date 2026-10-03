import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EMPTY = { title: "", location: "", category: "Residential", desc: "" };

export default function UploadProject() {
  const [form, setForm] = useState(EMPTY);
  const [image, setImage] = useState(null); // { name, dataUrl }
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Only image files (JPG / PNG / WebP) are allowed.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setImage({ name: file.name, dataUrl: reader.result });
    reader.readAsDataURL(file);
  };

  const submit = (e) => {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem("rk_projects") || "[]");
    list.unshift({
      id: Date.now(),
      ...form,
      image: image?.dataUrl || "",
      at: new Date().toISOString(),
    });
    localStorage.setItem("rk_projects", JSON.stringify(list));
    setSaved(true);
    setForm(EMPTY);
    setImage(null);
    // Brief pause so the confirmation is visible, then show the gallery.
    setTimeout(() => navigate("/projects"), 1600);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Student Showcase</span>
          <h2 className="section-title">Upload a project</h2>
          <p className="section-lead" style={{ marginInline: "auto" }}>
            Publish your work to the public gallery. Projects are stored in
            your browser's <strong>localStorage</strong> — no account needed.
          </p>
        </div>

        <div className="card form-card">
          <form onSubmit={submit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="up-title">Project title *</label>
                <input
                  id="up-title"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="e.g. Skyline Courtyard House"
                />
              </div>
              <div className="field">
                <label htmlFor="up-loc">Location</label>
                <input
                  id="up-loc"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  placeholder="City, State"
                />
              </div>
              <div className="field">
                <label htmlFor="up-cat">Category</label>
                <select
                  id="up-cat"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                >
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Public</option>
                  <option>Hospitality</option>
                  <option>Interior</option>
                  <option>Concept / Study Model</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="up-img">Project image</label>
                <label className="upload-drop" htmlFor="up-img">
                  <input id="up-img" type="file" accept="image/*" onChange={onFile} />
                  {image ? (
                    <>
                      <strong>{image.name}</strong> — click to replace
                    </>
                  ) : (
                    <>
                      <strong>Click to upload</strong> or drop an image here
                      <br />
                      JPG, PNG or WebP
                    </>
                  )}
                </label>
              </div>
              <div className="field full">
                <label htmlFor="up-desc">Description</label>
                <textarea
                  id="up-desc"
                  rows="4"
                  value={form.desc}
                  onChange={(e) => setForm({ ...form, desc: e.target.value })}
                  placeholder="Concept, materials, special features…"
                />
              </div>
              {image && (
                <div className="field full">
                  <img className="preview-img" src={image.dataUrl} alt="Upload preview" />
                </div>
              )}
              <div className="field full">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Publish to Gallery
                </button>
              </div>
              <p className="form-note">
                ⚠ Demo storage: entries persist in this browser only. Connect a
                backend or cloud storage for permanent, multi-user uploads.
              </p>
            </div>
            {saved && (
              <p className="success-msg">
                ✓ Project published. Taking you to the gallery…
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
