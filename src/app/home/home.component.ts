import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
 


export class HomeComponent {
  openPdf() {
    const pdfUrl = '../../assets/Resume.pdf'; // Replace with your PDF file path or URL
     window.open(pdfUrl, '_blank'); // Opens the PDF in a new tab
  }
}


//export class PdfViewerComponent {

  // Path to your PDF file
//  pdfUrl = '../../assets/Prashanth updated resume.1docx.docx';  // Update with the correct path to your PDF file

 // openPdf() {
    // Open the PDF in a new tab
  //  window.open(this.pdfUrl, '_blank');
 // }
//}
