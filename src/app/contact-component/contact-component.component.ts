import { ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.scss']
})


export class ContactComponentComponent {
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('mailField') mailField: ElementRef;
  @ViewChild('textField') textField: ElementRef;
  @ViewChild('sendBtn') sendBtn: ElementRef;
  @ViewChild('checkBox') checkBox: ElementRef;
  addBtnDisabledClass = false;
  addInputDisabledClass = false;
  showInfoMailSend = false;


  sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let textField = this.textField.nativeElement;
    let checkBox = this.checkBox.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;
    this.disableBtnAndInputs(nameField, mailField, textField, sendBtn, checkBox);
    this.fetchAndSendData(nameField, mailField, textField);
    this.enableBtnAndInputs(nameField, mailField, textField, sendBtn, checkBox);
  }


  disableBtnAndInputs(nameField: any, mailField: any, textField: any, sendBtn: any, checkBox: any) {
    nameField.disabled = true;
    mailField.disabled = true;
    textField.disabled = true;
    sendBtn.disabled = true;
    checkBox.disabled = true;
    this.addBtnDisabledClass = true;
    this.addInputDisabledClass = true;
  }


  async fetchAndSendData(nameField: any, mailField: any, textField: any) {
    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('name', mailField.value);
    formData.append('message', textField.value);
    await fetch('https://tom-petri.net/send_mail.php', { method: 'POST', body: formData });
  }


  enableBtnAndInputs(nameField: any, mailField: any, textField: any, sendBtn: any, checkBox: any) {
    this.clearInputFields(nameField, mailField, textField);
    setTimeout(() => {
      this.showInfoMailSend = true;
      nameField.disabled = false;
      mailField.disabled = false;
      textField.disabled = false;
      sendBtn.disabled = false;
      checkBox.disabled = false;
      checkBox.checked = false;
      this.addBtnDisabledClass = false;
      this.addInputDisabledClass = false;
    }, 3000);
  }


  clearInputFields(nameField: any, mailField: any, textField: any) {
    nameField.value = '';
    mailField.value = '';
    textField.value = '';
  }


  closeInfo() {
    this.showInfoMailSend = false;
  }
}