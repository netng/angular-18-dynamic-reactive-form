import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from '../question-base';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionControlService } from '../question-control.service';
import { CommonModule } from '@angular/common';
import { DynamicFormQuestionComponent } from "../dynamic-form-question/dynamic-form-question.component";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormQuestionComponent
],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit{

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
  
}
