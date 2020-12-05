import React, { Component } from 'react';
let patientid;
let instanceid;
let studyid;
let studydate;
class Share extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //console.log('this is:', this);
    //var a = document.getElementsByClassName("top-left overlay-element")[0].innerHTML;
    //let lengths1 = a.indexOf(a.indexOf("<div>"));
    //var lengths2 = a.indexOf(a.indexOf("</div>"));
    //var res = a.split("<div>");
    //var per = res.split("div");
    //alert(lengths2);
    //alert(a);
    //a = a.substring(lengths1);
    //alert(a);
    //alert('Hello World');
    const url = (window.location.href).toString();
    alert(url);
    var newur = url.split("/");
    alert(newur[4])
    const l = document.getElementsByClassName("top-left overlay-element")[0].innerHTML;
    const withoutLastChunk = l.slice(0, l.lastIndexOf("<div>"));
    patientid = withoutLastChunk.slice(5, withoutLastChunk.lastIndexOf("</div>"));
    alert(patientid);
    instanceid = l.slice(l.lastIndexOf("<div>") + 5, l.lastIndexOf("</div>"));
    alert(instanceid);

    const r = document.getElementsByClassName("top-right overlay-element")[0].innerHTML;
    const withoutLastChunk2 = r.slice(0, r.lastIndexOf("<div>"));
    studyid = withoutLastChunk2.slice(5, withoutLastChunk2.lastIndexOf("</div>"));
    alert(studyid);
    studydate = r.slice(r.lastIndexOf("<div>") + 5, r.lastIndexOf("</div>"));
    alert(studydate);
    window.location.replace(`https://atiya1-hub.github.io/#/studydet/${patientid}&${studyid}&${instanceid}&${studydate}&${newur[4]}`);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>
          share
</button>

      </div>
    );
  }
}

export default Share;
