type PokemonSprites = {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other?: {
      dream_world?: {
        front_default: string | null;
        front_female: string | null;
      };
      home?: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      "official-artwork"?: {
        front_default: string | null;
        front_shiny: string | null;
      };
      showdown?: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    versions?: Record<string, Record<string, Record<string, string | null>>>;
  }
  
  type PokemonStat = {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }
  
  type PokemonType = {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  
  export type Pokemon = {
    sprites: PokemonSprites;
    stats: PokemonStat[];
    types: PokemonType[];
  }