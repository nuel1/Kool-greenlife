import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { withNoDomReuse } from '@angular/platform-browser';
import {
  createWidget,
  createPopup,
  Popup,
  createSlider,
} from '@typeform/embed';
import * as tf from '@typeform/embed';
// import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // @ViewChild('typeformContainer') typeFormEl: ElementRef | null = null;
  // @ViewChild('typeformContainer') typeformContainer: ElementRef | null = null;
  window: any = window;
  ngOnInit() {
    // Load the Typeform script dynamically
    this.loadTypeformScript();
  }

  loadTypeformScript() {
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/next/embed.js';
    script.async = true;
    script.onload = () => {
      // Typeform script has loaded
    };

    document.body.appendChild(script);
  }
}
