
import { Component } from '@angular/core';

import { RequestTService } from '../material/info/table/table_ref/requestT.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../shared/generics.css', './main.component.css']
})



export class MainComponent {
  
  postReq_load = this.RequestTService.postReq_load;
  top: boolean = false;

  constructor( private RequestTService: RequestTService ) { }


  
  text_one = "La birra è una delle bevande più antiche prodotte dall'uomo, probabilmente databile al settimo millennio a.C., registrata nella storia scritta dell'antico Egitto e della Mesopotamia. La prima testimonianza chimica nota è datata intorno al 3500-3100 a.C. Poiché quasi qualsiasi sostanza contenente carboidrati, come ad esempio zucchero e amido, può andare naturalmente incontro a fermentazione, è probabile che bevande simili alla birra siano state inventate l'una indipendentemente dall'altra da diverse culture in ogni parte del mondo. È stato sostenuto che l'invenzione del pane e della birra sia stata responsabile della capacità dell'uomo di sviluppare tecnologie e di diventare sedentario, formando delle civiltà stabili.";

  text_two = "È verosimile che la diffusione della birra sia infatti coeva a quella del pane; poiché le materie prime erano le stesse per entrambi i prodotti, era solo <questione di proporzione>: se si metteva più farina che acqua e si lasciava fermentare si otteneva il pane; se invece si invertivano le quantità mettendo più acqua che farina, dopo la fermentazione si otteneva la birra.";

  text_thr = "Durante il processo di produzione, il malto viene immerso in acqua calda dove, grazie all'azione di alcuni enzimi presenti nella radichetta formatasi durante la germinazione, gli amidi presenti vengono convertiti in zuccheri fermentescibili, con il mosto zuccheroso ottenuto che può essere a sua volta aromatizzato con erbe aromatiche, frutta o più comunemente luppolo; successivamente viene impiegato un lievito dando inizio alla fermentazione, portando così alla formazione di alcool, unitamente ad anidride carbonica (per la maggior parte espulsa) ed altri prodotti di scarto derivanti dalla respirazione anaerobica dei lieviti.";

  text_fou = "Il processo produttivo della birra viene chiamato birrificazione o brassaggio e richiede numerose fasi di lavorazione. La prima di queste fasi è la maltificazione' (detta anche 'maltazione'): l'orzo o gli altri cereali, dopo essere stati selezionati e ripuliti, vengono immessi nelle vasche di macerazione dove ricevono l'acqua e l'ossigeno necessario per la germinazione. In taluni casi i cereali sono (parzialmente) impiegati anche non maltati.";

  text_fiv = "La birra aveva analoga importanza nell'Antico Egitto, dove la popolazione la beveva fin dalla sua infanzia, considerandola anche un alimento ed una medicina. Addirittura una birra a bassa gradazione o diluita con acqua e miele veniva somministrata ai neonati quando le madri non avevano latte. Anche per gli Egizi la birra aveva un carattere mistico, tuttavia c'era una grossa differenza rispetto ai Babilonesi: la produzione della birra non era più artigianale, ma era divenuta una vera e propria industria, con i faraoni che possedevano persino delle fabbriche.";



  shorten: boolean = true;
      onShorten() {
        this.shorten = false;
      }
}
