import * as React from "react"
import Layout from "../components/layout"

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      age: null,
      errormessage: ""
    }
  }

  myChangeHandler = (event) => {
    let nam = event.target.name
    let val = event.target.value
    let err = ""
    if (nam === "age") {
      if (val != "" && !Number(val)) {
        err = <strong>Your age must be a number</strong>
      }
    }
    this.setState({ errormessage: err })
    this.setState({ [nam]: val })
  }

  render() {
    return (
      <Layout>
        <form>
          <h1>Hello {this.state.username} {this.state.age}</h1>
          <input
            placeholder={'שם מלא'}
            type='text'
            name='username'
            onChange={this.myChangeHandler}
          />

          <textarea></textarea>
          {this.state.errormessage}
        </form>
      </Layout>
    )
  }

}

export default Contact;