import request from 'supertest';

const API_URL = 'http://localhost:3000/dev';

describe('POST /agendamento', () => {
  it('deve retornar 201 Created com uma carga útil válida', async () => {
    const payloadValido = {
      agendamento: {
        medico: 'Dr. João Silva',
        paciente: 'Carlos Almeida',
        data_horario: '2025-06-25 09:00',
      },
    };

    const response = await request(API_URL)
      .post('/agendamento')
      .send(payloadValido);

    expect(response.status).toBe(201);
    expect(response.body.mensagem).toBe('Agendamento realizado com sucesso');
    expect(response.body.agendamento).toEqual(payloadValido.agendamento);
  });

  it('deve retornar 400 Bad Request se o payload for inválido', async () => {
    const payloadInvalido = {
      agendamento: {
        paciente: 'Ana Paula',
        data_horario: '2025-11-10 10:00',
      },
    };

    const response = await request(API_URL)
      .post('/agendamento')
      .send(payloadInvalido);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Erro de validação no payload');
    expect(response.body.errors[0].message).toBe(
      'O campo medico é obrigatório.',
    );
  });
});
