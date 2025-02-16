import { describe, expect, it } from 'vitest';
import { groupByKey } from './index';

describe('Test de la fonction groupByKey', () => {
  it('1 - Doit grouper les objets par la clé spécifié', () => {
    const data = [
      { category: 'fruit', name: 'apple' },
      { category: 'fruit', name: 'banana' },
      { category: 'vegetable', name: 'carrot' },
    ];

    const result = groupByKey(data, 'category');

    expect(result).toEqual({
      fruit: [
        { category: 'fruit', name: 'apple' },
        { category: 'fruit', name: 'banana' },
      ],
      vegetable: [{ category: 'vegetable', name: 'carrot' }],
    });
  });

  it('2 - Doit retourner un objet vide si on en lui donnant un tableau vide', () => {
    expect(groupByKey([], 'category')).toEqual({});
  });

  it('3 - Doit gérer les objects avec des clés manquantes', () => {
    const data = [
      { category: 'fruit', name: 'apple' },
      { name: 'banana' }, // pas de catégorie
      { category: 'vegetable', name: 'carrot' },
    ];

    const result = groupByKey(data, 'category');

    expect(result).toEqual({
      fruit: [{ category: 'fruit', name: 'apple' }],
      vegetable: [{ category: 'vegetable', name: 'carrot' }],
      undefined: [{ name: 'banana' }], // Clé manquante => undefined
    });
  });

  it('4 - Doit gérer les nombres comme groupe de clés', () => {
    const data = [
      { id: 1, value: 'A' },
      { id: 2, value: 'B' },
      { id: 1, value: 'C' },
    ];

    const result = groupByKey(data, 'id');

    expect(result).toEqual({
      1: [
        { id: 1, value: 'A' },
        { id: 1, value: 'C' },
      ],
      2: [{ id: 2, value: 'B' }],
    });
  });
});
