import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
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
  @Input() noReconfirmModal: boolean;
  // -------------------------End of Input Required Variables-------------------------

  // -------------------------Modal Variable-------------------------
  modalContent: HTMLElement;
  // -------------------------Emit Confirm Button Click Event-------------------------
  @Output() confirmButtonClick: EventEmitter<void> = new EventEmitter<void>();

  // --------------------------------------------------Emit Confirm Button Click Event--------------------------------------------------
  onConfirmButtonClick() {
    this.confirmButtonClick.emit();
  }
  // --------------------------------------------------End of Emit Confirm Button Click Event--------------------------------------------------
}
