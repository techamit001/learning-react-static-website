function Contact() {
    return (
      <section className="p-5 bg-light text-center">
        <h2>Contact Us</h2>
        <form className="w-50 mx-auto">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    );
  }
export default Contact;  