import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-carousel-contact',
  templateUrl: './carousel-contact.component.html',
  styleUrls: ['./carousel-contact.component.css']
})
export class CarouselContactComponent implements OnInit, AfterViewInit, OnDestroy {
  // Propriedades do carrossel
  currentIndex: number = 0;
  totalItems: number = 0;
  autoSlideInterval: any; // Para o setInterval

  // Propriedades do formulário
  dataArray: FormData[] = [];
  modalMessage: string = '';
  isModalVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Inicialização, se necessário
  }

  ngAfterViewInit(): void {
    // Configurar o carrossel após a visualização estar pronta
    const items = document.querySelectorAll('.item');
    this.totalItems = items.length;
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    // Limpar o intervalo ao destruir o componente
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  // Função para atualizar a posição do carrossel
  showItem(index: number): void {
    if (index >= this.totalItems) index = 0;
    if (index < 0) index = this.totalItems - 1;
    this.currentIndex = index;

    const wrapper = document.querySelector('.items-wrapper') as HTMLElement;
    if (wrapper) {
      wrapper.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
  }

  // Funções de navegação do carrossel
  nextItem(): void {
    this.showItem(this.currentIndex + 1);
  }

  prevItem(): void {
    this.showItem(this.currentIndex - 1);
  }

  // Iniciar o avanço automático
  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextItem();
    }, 3000);
  }

  // Manipulação do formulário
  onSubmit(form: NgForm): void {
    if (form.valid) {
      const formData: FormData = {
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message
      };

      this.dataArray.push(formData);

      // Simulação de envio (substituir por chamada a um serviço real)
      const success: boolean = true; // Lógica real de sucesso/falha aqui

      this.showModal(success ? 'Mensagem enviada com sucesso!' : 'Falha ao enviar a mensagem. Tente novamente.');
      form.resetForm();
    }
  }

  // Exibir modal
  showModal(message: string): void {
    this.modalMessage = message;
    this.isModalVisible = true;
  }

  // Fechar modal
  closeModal(): void {
    this.isModalVisible = false;
  }

  // Fechar modal ao clicar fora
  onModalClick(event: MouseEvent): void {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
      this.closeModal();
    }
  }
}
