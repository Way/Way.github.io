import type { FigureId } from '../../consts';
import AgentComputer from './AgentComputer.astro';
import UsefulMeaningful from './UsefulMeaningful.astro';

export const FIGURES: Record<FigureId, typeof AgentComputer> = {
  'agent-computer': AgentComputer,
  'useful-meaningful': UsefulMeaningful,
};
