import {EventEmitter, AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {ManagerStepService} from "./services/manager-step.service";
import {ResetPinStages} from "./enums/reset-pin-stages";
import {EmailComponent} from "./components/email/email/email.component";
import { ModalCommunicationService } from './services/modal-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  @ViewChild("componentWrapper", { read: ViewContainerRef }) componentContainer: ViewContainerRef;

  constructor(private managerStepService: ManagerStepService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private communicationService: ModalCommunicationService
  ) {}

  ngOnInit(): void {
    this.initSubscription();
  }

  ngAfterViewInit(): void {
    this.renderComponent(EmailComponent);
  }

  handleClick(): void {
    this.managerStepService.next();
    const component = this.managerStepService.currentState;
    console.log("Current component", component);
    this.renderComponent(component);
  }

  private initSubscription(): void {
    this.communicationService.subscription.subscribe(x => {
      console.log("initSubscription", x);
      this.handleClick();
    });
  }

  private renderComponent(componentClazz: any) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentClazz);
    const componentWrapperRef = factory.create(this.componentContainer.injector);
    this.componentContainer.clear();
    this.componentContainer.insert(componentWrapperRef.hostView);
  }

  protected readonly ResetPinStages = ResetPinStages;
}
