import React from "react"
import SimpleReactValidator from "simple-react-validator"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class ContactFormFeedback extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      telephone: "",
    }
    this.validator = new SimpleReactValidator({
      className:
        "absolute z-20 top-0 right-0 text-2xl text-white bg-red-800 leading-none -mt-1 -mr-1 p-1 px-2",
      messages: {
        default: "*",
      },
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    if (this.validator.allValid()) {
      const form = e.target
      this.setState({
        submitting: true,
      })

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state,
        }),
      })
        .then(() => navigate(form.getAttribute("action")))
        .catch((error) => alert(error))
    } else {
      this.validator.showMessages()
      this.forceUpdate()
    }
    e.preventDefault()
  }

  render() {
    return (
      <form
        className="container mx-auto text-black"
        name="feedback-contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        {/* <p hidden>
                Don't fill this out:{" "} */}
        <label className="hidden">
          Do not fill this in
          <input name="bot-field" />
        </label>
        {/* </p> */}
        <div className="container flex flex-col mx-auto">
          <div className="flex flex-col gap-4">
            <label><input type="text" name="Name" className="w-full p-4 text-white bg-navy" placeholder="Name" /></label>
            <label className="relative flex flex-1">
              <textarea
                className="w-full p-4 text-white bg-navy h-96"
                placeholder="Feedback"
                type="text"
                name="details"
                onChange={this.handleChange}
              >
              {this.validator.message(
                "details",
                this.state.details,
                "required"
              )}
              </textarea>
            </label>
          </div>
          <div className="flex mt-4">
            <button className="w-full p-4 text-white transition duration-300 bg-tuscany hover:bg-butterscotch hover:text-navy" type="submit">
              Send feedback
            </button>
          </div>
        </div>
      </form>
    )
  }
}
