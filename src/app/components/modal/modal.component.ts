import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements AfterViewInit {
  // -------------------------Input Required Variables-------------------------
  @Input() modalMessage: string;
  @Input() modalConfirmMessage: string;
  @Input() modalButtonMessage: string;
  @Input() route: string;
  @Input() fragment: string;
  @Input() confirmModalMessage: string;
  @Input() confirmModalConfirmMessage: string;
  @Input() confirmModalButtonMessage: string;
  @Input() confirmRoute: string;
  @Input() confirmFragment: string;
  @Input() noButton: boolean;
  @Input() noReconfirmModal: boolean;
  // -------------------------End of Input Required Variables-------------------------

  // -------------------------Modal Variable-------------------------
  modalContent: HTMLElement;
  // -------------------------Emit Confirm Button Click Event-------------------------
  @Output() confirmButtonClick: EventEmitter<void> = new EventEmitter<void>();

  ngAfterViewInit(): void {
    // --------------------------------------------------Set Modal Content--------------------------------------------------
    if (this.noButton) {
      this.modalContent = document.getElementById(
        'modalContent'
      ) as HTMLElement;
      console.log('modalContent  ---> ', this.modalContent);
      this.modalContent.innerHTML = this.modalMessage;
      console.log('modalContent (with Message)  ---> ', this.modalContent);
    }
    // --------------------------------------------------End of Set Modal Content--------------------------------------------------

    // -------------------------Modal Data-------------------------
    console.log('Modal Message  ---> ', this.modalMessage);
    console.log('Modal Button Message  ---> ', this.modalButtonMessage);
    console.log('Route  ---> ', this.route);
    // -------------------------End of Modal Data-------------------------
  }

  // --------------------------------------------------Emit Confirm Button Click Event--------------------------------------------------
  onConfirmButtonClick() {
    this.confirmButtonClick.emit();
  }
  // --------------------------------------------------End of Emit Confirm Button Click Event--------------------------------------------------
}
