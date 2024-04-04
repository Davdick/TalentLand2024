import { RouterOutlet } from '@angular/router';
  import { RouterModule, Routes } from '@angular/router';


  // import { Component } from '@angular/core';
  import { HostListener } from '@angular/core';
  // @Component({
  //   selector: 'app-root',
  //   templateUrl: './app.component.html',
  //   styleUrl: './app.component.css'
  // })
  // export class AppComponent {
    //   title = 'AgroDirecta_IA';
    //   menuVisible: boolean = false;
    import { Component } from '@angular/core';
    
    @Component({
      selector: 'app-root',
      imports: [RouterOutlet],
      templateUrl: './app.component.html',
      standalone: true,
      styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgroDirecta_IA';
  menuVisible: boolean = false;
  @HostListener('document:click', ['$event'])
  toggleMenu(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('toggle-btn')) {
      const sidebar = document.getElementById('sidebar');
      if (sidebar) {
        sidebar.classList.toggle('expand');
        this.menuVisible = sidebar.classList.contains('expand');
      }
    }
  }
}