import type { ImageMetadata } from "astro";
import accountTree from "../assets/icons/account_tree.svg";
import target from "../assets/icons/target.svg";
import strategy from "../assets/icons/strategy.svg";
import campaign from "../assets/icons/campaign.svg";
import onlinePrediction from "../assets/icons/online_prediction.svg";
import groups from "../assets/icons/groups.svg";
import partnerExchange from "../assets/icons/partner_exchange.svg";
import financeMode from "../assets/icons/finance_mode.svg";
import memory from "../assets/icons/memory.svg";
import allInclusive from "../assets/icons/all_inclusive.svg";
import conveyorBelt from "../assets/icons/conveyor_belt.svg";
import tactic from "../assets/icons/tactic.svg";

export interface Highlight {
	title: string;
	text: string;
	featured?: boolean;
}

export interface Service {
	title: string;
	icon: ImageMetadata;
	items: string[];
}

export const highlights: Highlight[] = [
	{
		title: "Risultati Tangibili",
		text: "Il mio focus è sul risultato finale. Ogni consulenza è progettata per produrre risultati concreti e miglioramenti tangibili. La mia consulenza non è mai un costo per te, ma un investimento nella crescita e nello sviluppo della tua azienda.",
		featured: true,
	},
	{
		title: "Investi nel differente",
		text: "Non accontentarti delle solite soluzioni. Investi in un approccio atipico, in una consulenza che sfida le aspettative e che è progettata per portare il tuo business a nuovi livelli di successo.",
	},
	{
		title: "Valutazione senza oneri",
		text: "Il nostro percorso inizia con un incontro con le figure chiave della tua azienda. Questi primi incontri serviranno a esplorare la tua situazione, valutare che ci siano le opportunità per portare risultati concreti e nel caso ci sia reciproca convinzione a partire con il progetto.",
	},
];

export const services: Service[] = [
	{
		title: "Analisi dell'attuale situazione aziendale",
		icon: accountTree,
		items: [
			"Identificazione del cliente e del target di riferimento.",
			"Valutazione della struttura aziendale e dell'organigramma.",
			"Raccolta di feedback interno da parte dei dipendenti.",
			"Analisi S.W.O.T. e competitività.",
		],
	},
	{
		title: "Identificazione degli Obiettivi e delle Esigenze",
		icon: target,
		items: [
			"Interviste con le figure chiave per stabilire obiettivi a breve e lungo termine.",
			"Identificazione delle principali esigenze e sfide aziendali.",
			"Definizione di metriche di successo chiave per monitorare i progressi.",
		],
	},
	{
		title: "Pianificazione Strategica",
		icon: strategy,
		items: [
			"Sviluppo di una visione aziendale a lungo termine.",
			"Definizione di una strategia aziendale per raggiungere gli obiettivi.",
			"Creazione di piani d'azione e scadenze.",
		],
	},
	{
		title: "Marketing e Posizionamento di Mercato",
		icon: campaign,
		items: [
			"Analisi del posizionamento attuale dell'azienda nel mercato.",
			"Identificazione del target di riferimento e delle opportunità di mercato.",
			"Sviluppo di piani di marketing e branding per aumentare la visibilità e l'attrattiva.",
			"Analisi e definizione Funnel di comunicazione",
		],
	},
	{
		title: "Strategia Digitale",
		icon: onlinePrediction,
		items: [
			"Valutazione dell'attuale presenza online e strategia digitale.",
			"Identificazione delle opportunità per migliorare la visibilità online e l'interazione con i clienti.",
			"Sviluppo di una strategia di marketing digitale, inclusi social media, SEO e pubblicità online.",
			"Monitoraggio delle metriche di successo digitali.",
		],
	},
	{
		title: "Gestione delle Risorse Umane",
		icon: groups,
		items: [
			"Analisi dell'organigramma aziendale e delle competenze del personale.",
			"Sviluppo di strategie di gestione delle risorse umane per migliorare il coinvolgimento e la produttività.",
			"Pianificazione della formazione e dello sviluppo dei dipendenti.",
			"Implementazione di politiche di remunerazione competitive e di benefit aziendali.",
			"Monitoraggio delle prestazioni e valutazione del personale.",
		],
	},
	{
		title: "Strategia di Vendita",
		icon: partnerExchange,
		items: [
			"Analisi delle attuali strategie di vendita e dei canali di distribuzione.",
			"Identificazione delle opportunità di crescita delle vendite.",
			"Sviluppo di un piano di vendita efficace, inclusi obiettivi di vendita, strategie di pricing e promozione.",
			"Formazione e sviluppo del team di vendita.",
			"Monitoraggio delle prestazioni delle vendite e analisi dei risultati.",
		],
	},
	{
		title: "Finanza ed Efficienza Operativa",
		icon: financeMode,
		items: [
			"Logiche di gestione e definizione del budget.",
			"Analisi delle finanze aziendali, inclusi bilanci e flussi di cassa.",
			"Identificazione di opportunità di risparmio e ottimizzazione dei costi.",
			"Analisi sostenibilità dei business.",
		],
	},
	{
		title: "Tecnologia e Innovazione",
		icon: memory,
		items: [
			"Valutazione delle attuali soluzioni tecnologiche e infrastrutture volte alla realizzazione del business (non tecniche)",
			"Raccomandazioni per l'adozione di nuove tecnologie per migliorare l'efficienza e la competitività.",
			"Pianificazione di sistemi di gestione e analisi dei dati.",
		],
	},
	{
		title: "Sostenibilità",
		icon: allInclusive,
		items: [
			"Definizione approccio culturale interno all’azienda",
			"Analisi delle pratiche aziendali attuali in termini di sostenibilità.",
			"Sviluppo di iniziative per ridurre l'impatto ambientale e promuovere la responsabilità sociale.",
			"Creazione di un piano di sostenibilità aziendale, comprensivo di obiettivi e strategie a breve e lungo termine.",
			"Comunicazione dei progressi raggiunti nella sostenibilità all'interno e all'esterno dell'azienda.",
		],
	},
	{
		title: "Logistica",
		icon: conveyorBelt,
		items: [
			"Valutazione delle attuali operazioni logistiche e catena di approvvigionamento.",
			"Ottimizzazione dei processi logistici per ridurre i costi e migliorare l'efficienza.",
			"Gestione dell'inventario e strategie di ottimizzazione delle scorte e planning di acquisto.",
		],
	},
	{
		title: "Pianificazione e Monitoraggio",
		icon: tactic,
		items: [
			"Definizione di indicatori chiave di performance (KPI) e obiettivi misurabili.",
			"Creazione di piani d'azione dettagliati per implementare le raccomandazioni.",
			"Monitoraggio costante dei progressi e aggiornamenti periodici.",
			"Regolazione delle strategie in base ai risultati ottenuti.",
		],
	},
];
