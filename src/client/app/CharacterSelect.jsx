import React from 'react';
import { render } from 'react-dom';

class CharacterSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ryu: false,
      ken: false,
      guile: false,
      akuma: false,
      bison: false,
      balrog: false,
      chunli: false,
      honda: false,
      dhalsim: false,
      zangief: false,
      blanka: false,
    };
  }

  onSubmitRyu(e) {
    this.setState({ playerOne: e, ryu: !this.state.ryu });
  }

  onSubmitKen(e) {
    this.setState({ playerTwo: e, ken: !this.state.ken });
  }

  onSubmitGuile(e) {
    this.setState({ guile: !this.state.guile });
  }

  onSubmitBison(e) {
    this.setState({ bison: !this.state.bison });
  }

  onSubmitAkuma(e) {
    this.setState({ akuma: !this.state.akuma });
  }

  onSubmitChunli(e) {
    this.setState({ chunli: !this.state.chunli });
  }

  onSubmitHonda(e) {
    this.setState({ honda: !this.state.honda });
  }

  onSubmitDhalsim(e) {
    this.setState({ dhalsim: !this.state.dhalsim });
  }

  onSubmitBalrog(e) {
    this.setState({ balrog: !this.state.balrog });
  }

  onSubmitZangief(e) {
    this.setState({ zangief: !this.state.zangief });
  }

  onSubmitDan(e) {
    this.setState({ dan: !this.state.dan });
  }

  onSubmitBlanka(e) {
    this.setState({ blanka: !this.state.blanka });
  }

  render() {
    return (
      <div className="select">
        <img src="../app/charScreen.jpg" alt="screen" />
        <img onClick={(e) => this.onSubmitRyu(e.target.className)} className="ryu" src="../app/ryu.jpg" alt="ryu" />
        <img onClick={(e) => this.onSubmitKen(e.target.className)} className="ken" src="../app/ken.jpg" alt="ken" />
        <img onClick={(e) => this.onSubmitGuile(e.target.className)} className="guile" src="../app/guile.jpg" alt="guile" />
        <img onClick={(e) => this.onSubmitZangief(e.target.className)} className="zangief" src="../app/zangief.jpg" alt="zangief" />
        <img onClick={(e) => this.onSubmitAkuma(e.target.className)} className="akuma" src="../app/akuma.jpg" alt="akuma" />
        <img onClick={(e) => this.onSubmitBlanka(e.target.className)} className="blanka" src="../app/test.jpeg" alt="blanka" />
        <img onClick={(e) => this.onSubmitChunli(e.target.className)} className="chunli" src="../app/chunli.jpeg" alt="chunli" />
        <img onClick={(e) => this.onSubmitHonda(e.target.className)} className="honda" src="../app/honda.jpeg" alt="honda" />
        <img onClick={(e) => this.onSubmitBison(e.target.className)} className="bison" src="../app/bison.jpeg" alt="bison" />
        <img onClick={(e) => this.onSubmitDhalsim(e.target.className)} className="dhalsim" src="../app/dhalsim.jpeg" alt="dhalsim" />
        <img onClick={(e) => this.onSubmitBalrog(e.target.className)} className="balrog" src="../app/balrog.jpeg" alt="balrog" />
        <img onClick={(e) => this.onSubmitDan(e.target.className)} className="dan" src="../app/dan.jpeg" alt="dan" />
        <div>
          {this.state.ryu ? <img src="../app/ryuGif.gif" className="rGif" alt="rGif" /> : null}
        </div>
        <div>
          {this.state.ken ? <img src="../app/kenGif.gif" className="kGif" alt="kGif" /> : null}
        </div>
        <div>
          {this.state.guile ? <img src="../app/gGif.gif" className="gGif" alt="gGif" /> : null}
        </div>
        <div>
          {this.state.bison ? <img src="../app/bison.gif" className="bGif" alt="bGif" /> : null}
        </div>
        <div>
          {this.state.akuma ? <img src="../app/akuma.gif" className="aGif" alt="aGif" /> : null}
        </div>
        <div>
          {this.state.chunli ? <img src="../app/chunli.gif" className="cGif" alt="cGif" /> : null}
        </div>
        <div>
          {this.state.honda ? <img src="../app/honda.gif" className="hGif" alt="hGif" /> : null}
        </div>
        <div>
          {this.state.dhalsim ? <img src="../app/dhalsim.gif" className="dGif" alt="dGif" /> : null}
        </div>
        <div>
          {this.state.balrog ? <img src="../app/balrog.gif" className="baGif" alt="baGif" /> : null}
        </div>
        <div>
          {this.state.zangief ? <img src="../app/zangief.gif" className="zGif" alt="zGif" /> : null}
        </div>
        <div>
          {this.state.dan ? <img src="../app/dGif.gif" className="dGif" alt="dGif" /> : null}
        </div>
        <div>
          {this.state.blanka ? <img src="../app/blanka.gif" className="blGif" alt="blGif" /> : null}
        </div>
      </div>
    );
  }
}

export default CharacterSelect;
