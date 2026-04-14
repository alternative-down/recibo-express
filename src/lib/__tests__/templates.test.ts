import { describe, it, expect } from 'vitest';
import { TEMPLATES, getTemplateById, renderReceipt } from '../templates';
import type { ReceiptTemplate } from '../templates';

describe('TEMPLATES', () => {
  it('has 5 receipt templates', () => {
    expect(TEMPLATES).toHaveLength(5);
  });

  it('all templates are free', () => {
    TEMPLATES.forEach(t => {
      expect(t.planType).toBe('free');
      expect(t.price).toBe(0);
    });
  });

  it('each template has a unique id', () => {
    const ids = TEMPLATES.map(t => t.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it('each template has required fields', () => {
    TEMPLATES.forEach(t => {
      expect(typeof t.id).toBe('string');
      expect(t.id.length).toBeGreaterThan(0);
      expect(typeof t.name).toBe('string');
      expect(typeof t.description).toBe('string');
      expect(t.planType).toBe('free');
      expect(t.price).toBe(0);
      expect(typeof t.icon).toBe('string');
      expect(t.fields).toBeInstanceOf(Array);
      expect(t.fields.length).toBeGreaterThan(0);
    });
  });

  it('each field has required properties', () => {
    TEMPLATES.forEach(t => {
      t.fields.forEach(field => {
        expect(typeof field.label).toBe('string');
        expect(typeof field.key).toBe('string');
        expect(typeof field.required).toBe('boolean');
        expect(typeof field.placeholder).toBe('string');
      });
    });
  });
});

describe('getTemplateById', () => {
  it('returns template for valid id', () => {
    const classico = getTemplateById('classico');
    expect(classico).toBeDefined();
    expect(classico!.name).toBe('Clássico');
  });

  it('returns template for modern id', () => {
    const moderno = getTemplateById('moderno');
    expect(moderno).toBeDefined();
    expect(moderno!.name).toBe('Moderno');
  });

  it('returns undefined for invalid id', () => {
    expect(getTemplateById('nonexistent')).toBeUndefined();
  });

  it('returns undefined for empty string', () => {
    expect(getTemplateById('')).toBeUndefined();
  });
});

describe('renderReceipt', () => {
  const classico = TEMPLATES.find(t => t.id === 'classico') as ReceiptTemplate;

  it('renders receipt with all provided fields', () => {
    const formData: Record<string, string> = {
      providerName: 'João Silva',
      providerDocument: '123.456.789-00',
      providerAddress: 'Rua Example, 100, São Paulo - SP',
      clientName: 'Maria Santos',
      clientDocument: '987.654.321-00',
      description: 'Prestação de serviços de consultoria',
      amount: '500,00',
      date: '13/04/2026',
      paymentMethod: 'PIX',
    };
    const output = renderReceipt(classico, formData);
    expect(output).toContain('RECIBO');
    expect(output).toContain('João Silva');
    expect(output).toContain('123.456.789-00');
    expect(output).toContain('Maria Santos');
    expect(output).toContain('500,00');
    expect(output).toContain('PIX');
  });

  it('uses [—] placeholder for missing fields', () => {
    const output = renderReceipt(classico, {});
    expect(output).toContain('[—]');
  });

  it('includes Endereço when providerAddress is provided', () => {
    const formData: Record<string, string> = {
      providerName: 'X', providerDocument: 'X', providerAddress: 'Rua Example 100',
      clientName: 'X', clientDocument: 'X',
      description: 'X', amount: 'X', date: 'X', paymentMethod: 'X',
    };
    const output = renderReceipt(classico, formData);
    expect(output).toContain('Endereço: Rua Example 100');
  });

  it('includes amount text when provided', () => {
    const formData: Record<string, string> = {
      providerName: 'X', providerDocument: 'X',
      clientName: 'X', clientDocument: 'X',
      description: 'X', amount: '500,00', amountText: 'Quinhentos reais',
      date: 'X', paymentMethod: 'X',
    };
    const output = renderReceipt(classico, formData);
    expect(output).toContain('Quinhentos reais');
  });
});