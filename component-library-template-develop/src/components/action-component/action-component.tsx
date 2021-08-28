import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'action-component',
  styleUrl: 'action-component.scss',
  shadow: true,
})
export class ActionComponent {

  @State() open: boolean=false;

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Host>
        <div class="HeadlineContainer">
          <div class="HeadlineWrapper">
            <div class="HeadlineText">
              <h1> CtA - Main conversion </h1>
            </div>
          </div>
        </div>
        <div class="MainContentContainer">
          <div class="InformationContainer">
            <div class="InformationWrapper"> 
              <p class="InformationText"> A wonderful serenity has taken possession </p>
              <p> A wonderful serenity has taken possession of my entire soul, like these sweet moments </p>
              <button type="button" name="link_button" class="LinkButton" onClick={() => this.open=true}> Link button </button>
            </div>
          </div>
          <div class="ImageContainer">
          </div>
        </div>
        <div hidden={!this.open} class="ContactContainer">
          <div class="ContactWrapper">
            <div class="ContactHeader">
              <div class="ArrowUp"></div>
              <p class="ContactText"> Contact us </p>
            </div>
          </div>
          <button class="CloseButton" aria-label="Close alert" type="button"  onClick={() => this.open=false} data-close>
            <span aria-hidden="true">&times;</span> Close
          </button>
        </div>
      </Host>
    );
  }
}
