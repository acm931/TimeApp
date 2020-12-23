import React, { Component } from 'react';
import './App.css';
import App from './App.js';

export default class Menu extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      text: (<div>Inicio</div>),
      text_plainText: "Inicio",
      textcopy4: (<div><a href="rnFirebaseAuth\components\signup.js">Registro</a></div>),
      textcopy4_plainText: "Registro",
      textcopy2: (<div>Login</div>),
      textcopy2_plainText: "Login",
      textcopy3: (<div>Sobre Nosotros</div>),
      textcopy3_plainText: "Sobre Nosotros",
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  onClick_elHotspot = (ev) => {
    alert("This is a demo. You need to replace the links with real buttons in React Studio");
    
    
  
  }
  
  
  render() {
    
    const style_elBackgroundShape = {
      background: 'rgba(254, 255, 255, 1.000)',
     };
    
    const style_elLine = {
      borderTop: '1px solid rgba(0, 0, 0, 0.6976)',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elLineCopy4 = {
      borderTop: '1px solid rgba(0, 0, 0, 0.6976)',
     };
    const style_elTextCopy4 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elLineCopy = {
      borderTop: '1px solid rgba(0, 0, 0, 0.6976)',
     };
    const style_elTextCopy2 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elLineCopy2 = {
      borderTop: '1px solid rgba(0, 0, 0, 0.6976)',
     };
    const style_elTextCopy3 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elLineCopy5 = {
      borderTop: '1px solid rgba(0, 0, 0, 0.6976)',
     };
    
    const style_elHotspot = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
      display: 'none',
     };
    
    return (
      <div className="Menu">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow">
          <div className="elLine">
            <div style={style_elLine} />
          </div>
          
          <div className="elText">
            <div className="headlineFont" style={style_elText}>
              <div>{this.state.text}</div>
            </div>
          </div>
          
          <div className="elLineCopy4">
            <div style={style_elLineCopy4} />
          </div>
          
          <div className="elTextCopy4">
            <div className="headlineFont" style={style_elTextCopy4}>
              <div>{this.state.textcopy4}</div>
            </div>
          </div>
          
          <div className="elLineCopy">
            <div style={style_elLineCopy} />
          </div>
          
          <div className="elTextCopy2">
            <div className="headlineFont" style={style_elTextCopy2}>
              <div>{this.state.textcopy2}</div>
            </div>
          </div>
          
          <div className="elLineCopy2">
            <div style={style_elLineCopy2} />
          </div>
          
          <div className="elTextCopy3">
            <div className="headlineFont" style={style_elTextCopy3}>
              <div>{this.state.textcopy3}</div>
            </div>
          </div>
          
          <div className="elLineCopy5">
            <div style={style_elLineCopy5} />
          </div>
        </div>
        
        <div className="foreground">
          <div className="actionFont containerMinHeight elHotspot" style={style_elHotspot} onClick={this.onClick_elHotspot}  />
        </div>
      </div>
    )
  }
  
}
