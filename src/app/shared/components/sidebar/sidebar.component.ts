import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ISidebarItem } from '../../../core/interfaces/sidebar-item';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-sidebar',
  standalone:false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    trigger('slideDown', [
      state('open', style({
        height: '*',
        opacity: 1,
        visibility:'visible',
      })),
      state('close', style({
        height: '0px',
        opacity: 0,
        visibility:'hidden'
      })),
      transition('open => close', [
        animate('0.3s')
      ]),
      transition('close => open', [
        animate('0.3s')
      ])
    ])
  ],
})
export class SidebarComponent {

  collapse: boolean = false;
  @ViewChildren('line') line!: QueryList<ElementRef<HTMLSpanElement>>;
  @ViewChildren('tabItem') dropdownItems!: QueryList<ElementRef<HTMLDivElement>>;
  isMobile: boolean = false;
  showSidebar: boolean = false;
  sidebar: ISidebarItem[] = [
    { ID: 1, Title: 'داشبورد', Icon:'home-smile', Path: 'home', Children: [], ShowChildren: false },
    {
      ID: 2, Title: 'مدیریت کاربران', Icon:'users-group-rounded', Path: 'user-management', Children: [
        { ID: 21, Title: 'لورم ایپسوم متن', Icon:'', Path: 'user-management/lorem1', Children: [], ShowChildren: false },
        { ID: 22, Title: 'لورم ایپسوم متن', Icon:'', Path: 'user-management/lorem2', Children: [], ShowChildren: false },
        { ID: 23, Title: 'لورم ایپسوم متن', Icon:'', Path: 'user-management/lorem3', Children: [], ShowChildren: false },
      ], ShowChildren: false
    },
    { ID: 3, Title: 'مدیریت گزارشات', Icon: 'pie-chart2', Path: 'report-management', Children: [], ShowChildren: false },
    {
      ID: 4, Title: 'مدیریت محصولات', Icon: 'magic-stick2', Path: 'product-management', Children: [
        { ID: 41, Title: 'لورم ایپسوم متن', Icon:'', Path: 'user-management/lorem1', Children: [], ShowChildren: false },
        { ID: 42, Title: 'لورم ایپسوم متن', Icon:'', Path: 'user-management/lorem2', Children: [], ShowChildren: false },
        { ID: 43, Title: 'لورم ایپسوم متن', Icon:'', Path: 'user-management/lorem3', Children: [], ShowChildren: false },
    ], ShowChildren: false },
    { ID: 5, Title: 'تنظیمات', Icon: 'setting', Path: 'setting', Children: [], ShowChildren: false },
    { ID: 6, Title: 'پشتیبانی', Icon: 'headphones-round-sound', Path: 'support', Children: [], ShowChildren: false },
  ]

  @HostListener('window:resize', ['$event'])

  onResize() {
    this.checkDevice();
  }
  ngOnInit() {
    this.checkDevice()
  }
  checkDevice() {
    this.isMobile =  window.matchMedia("(max-width: 575px)").matches ? true : false;
  }
  
  onTabHover(el: HTMLDivElement) {
    const { offsetHeight, offsetTop, parentElement } = el;
    const lineEl = parentElement?.querySelector('.line') as HTMLElement;
    lineEl.style.top = `${offsetTop}px`;
    lineEl.style.height = `${offsetHeight}px`;
  }

  onMouseLeave(el: HTMLDivElement) {
    const { parentElement } = el;
    const lineEl = parentElement?.querySelector('.line') as HTMLElement;
    lineEl.style.top = '0';
    lineEl.style.height = `0px`;
  }

  onToggleSubmenu(item: ISidebarItem) {
    const filterArray = this.sidebar.filter(sidebarItem => sidebarItem.ID != item.ID);
    filterArray.forEach(item => item.ShowChildren = false)
    item.ShowChildren = !item.ShowChildren;
  }

  onToggleSidebar() {
    this.isMobile ? document.querySelector('.sidebar-container')?.classList.remove('show') : this.collapse = !this.collapse
  }
}
