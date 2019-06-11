import React from 'react';
import banner from "../../img/banner.jpg"
import codeacademy from "../../img/codeacademy.png"
import avatarCodeAcademy from "../../img/avatarcodeacademy.png"
import aerfcimage from "../../img/aerfc.jpg"
import avatarAerfc from "../../img/avataraerfc.jpg"


class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            productList: [
                {
                    id: 1,
                    name: 'Codeacademy',
                    link: 'https://codeacademy.com',
                    media: codeacademy,
                    upvote: 169,
                    description: 'Code for anyone',
                    maker: {
                        name: 'hieu',
                        avatar: avatarCodeAcademy
                    }
                },
                {
                    id: 2,
                    name: 'AER',
                    link: 'https://aerfc.com',
                    media: aerfcimage,
                    upvote: 209,
                    description: 'Soccer',
                    maker: {
                        name: 'kev lozano',
                        avatar: avatarAerfc
                    }
                }
            ]
        }
    }

    render() {
        return (
            <section>
                <header>
                    <img src={banner} width="100%"/>
                </header>

                <section>
                    <section className="container">
                        <ul className="product-list">
                            <li className="product-item">
                                <a className="upvote-button" href="#">
                                    <span>
                                    <i className="fa fa-sort-asc" aria-hidden="true"></i>
                                    </span>
                                    {this.state.productList[0].upvote}
                                </a>
                                <img className="product-item-media" src={this.state.productList[0].media}></img>
                                <section className="product-item-info">
                                    <a href="#">
                                        <h2>{this.state.productList[0].name}</h2>
                                    </a>
                                    <p>
                                        {this.state.productList[0].description}
                                    </p>
                                    <a href="#">
                                        <img className="small-avatar" src={this.state.productList[0].maker.avatar}></img>
                                    </a>
                                </section>
                                <a className="product-item-link" href={this.state.productList[0].link}>
                                    <span>
                                        <i className="fa fa-external-link"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
        );
    }
}

export default HomePage;