
export type CustomComponentProp = {
    icon: any;
    title: string;
    description: string;
};

export interface CustomComponentProps {
    heading: string;
    para: string;
    background: string;
    items: CustomComponentProp[];
}

// New type for only icon and title to pass in carousel
export type CarouselItem = {
    icon: any;
    title: string;
  };


export type CardInfo = {
    icon: any;
    title: string;
    description: string;
};