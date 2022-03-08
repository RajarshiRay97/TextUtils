import React from 'react'

export default function About(props) {
  document.title = "TextUtils - About Us"

  return (
    <div className={"container "+props.customizeClass} style={{padding: "20px 40px"}}>
      <h2 style={{textAlign: "center"}}>TextUtils is an utility Application, which can be used to manipulate your text in the way you want</h2>
      <hr/>
      <h2 style={{textAlign: "center", margin:"20px 10px", padding: "10px 0", backgroundColor: "#609bb5"}}>FREQUENTLY ASKED QUESTIONS</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className={"accordion-item "+props.classAccordion.classForAI}>
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              How can I change the case of the text?
            </button>
          </h2>
          <div id="flush-collapseOne" className={"accordion-collapse collapse "+props.classAccordion.classForAC} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Type or paste some content in the textbox. Then click 'Upper Case' or 'Lower Case' or 'Capitalize Case' Button to change the case of your text. Now it's your choice, which button you have to click.</div>
          </div>
        </div>
        <div className={"accordion-item "+props.classAccordion.classForAI}>
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              How to remove the extra spaces from my text?
            </button>
          </h2>
          <div id="flush-collapseTwo" className={"accordion-collapse collapse "+props.classAccordion.classForAC} aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">It is just a matter of one click. Please click on 'Remove Extra Space' button to remove the extra spaces from your text.</div>
          </div>
        </div>
        <div className={"accordion-item "+props.classAccordion.classForAI}>
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Is this application a Single Page Application?
            </button>
          </h2>
          <div id="flush-collapseThree" className={"accordion-collapse collapse "+props.classAccordion.classForAC} aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Yes, <strong>TextUtils</strong> is a Single Page Application, developed using React JS Library.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
