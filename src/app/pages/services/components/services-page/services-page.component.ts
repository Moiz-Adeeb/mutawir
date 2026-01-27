import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterLink } from '@angular/router';

interface service{
  label: string,
  img: string,
  link: string,
}

@Component({
  selector: 'app-services-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css',
})
export class ServicesPageComponent {
  services: service[] = [
    {
      label: 'Website Development',
      img: '/assets/img/services/website_development.webp',
      link: '/website_development',
    },
    {
      label: 'Mobile App Development',
      img: '/assets/img/services/mobile_app_development.webp',
      link: '/mobile_app_development',
    },
    {
      label: 'UI/UX Design',
      img: '/assets/img/services/ui_ux_design.webp',
      link: '/ui_ux_development',
    },
    {
      label: 'Graphic Designing',
      img: '/assets/img/services/graphic_designing.webp',
      link: '/graphic_designing',
    },
    {
      label: 'Branding',
      img: '/assets/img/services/branding.webp',
      link: '/branding',
    },
    {
      label: 'Logo Designing',
      img: '/assets/img/services/logo_designing.webp',
      link: '/logo_designing',
    },
  ];
}
