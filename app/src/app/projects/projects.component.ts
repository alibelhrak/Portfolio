import { Component , OnInit} from '@angular/core';
import * as aos from 'aos';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  ngOnInit() {
    aos.init();
    }

}
