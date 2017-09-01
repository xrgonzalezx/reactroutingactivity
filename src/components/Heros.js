import React, { Component } from 'react';



class Heros extends Component {

  render() {

    let aboutStyle = {
  "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/grouppic.jpg)",
  "backgroundSize": "cover",
  "textShadow": "2px 2px 2px black",
  "height": "100%",
  "padding": "100px"
}
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <h2 className="col-lg-offset-2 headings">Minecraft Heros</h2>
        <section className="row" style= {aboutStyle}>
        <article className="col-lg-5">
          <h2 className="headings">
            Hero Steve
          </h2>
          <hr/>
          <p className="primary-text">Steve is the main protagonist of the famous video game Minecraft. Very little is known about Steve and who or what it is, where it orignated from, what its goal is, and if its even human. </p>
        </article>
      </section>
      <section className="row" style= {aboutStyle}>
      <article className="col-lg-5">
        <h2 className="headings">
          Herobrine
        </h2>
        <hr/>
        <p className="primary-text">Herobrine is the subject of a community-made creepypasta. He is one of the major community icons of Minecraft. Herobrine has not been present in any version of Minecraft.

        "Canon" of Herobrine is widely regarded as the first image/story ever posted about Herobrine, as well as the Brocraft stream. Anything posted after these two events are considered as fanmade adaptions/variations. </p>
      </article>
    </section>
      </div>
    );
  }
}

export default Heros;
