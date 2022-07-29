import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-csvupload',
  templateUrl: './csvupload.component.html',
  styleUrls: ['./csvupload.component.css']
})
export class CsvuploadComponent implements OnInit {

  file:File|any
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
  }
  onFileSelect(event:any){
    this.file=event.target.files[0];}
    upload(){
      const fd=new FormData();
      fd.append('file',this.file)
      this.http.post("http://localhost:8080/csv/upload",fd)
      .subscribe(res=>{
        console.log(res)
        alert("Saved Successfully")
      })
     
    }

}
