class Api::V1::CircuitsController < ApplicationController
  before_action :set_circuit, only: %i[ show update destroy ]

  # GET /api/v1/circuits
  def index
    @circuits = Circuit.all

    render json: @circuits
  end

  # GET /api/v1/circuits/1
  def show
    render json: @circuit
  end

  # POST /api/v1/circuits
  def create
    @circuit = Circuit.new(circuit_params)

    if @circuit.save
      render json: @circuit, status: :created, location: @circuit
    else
      render json: @circuit.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/circuits/1
  def update
    if @circuit.update(circuit_params)
      render json: @circuit
    else
      render json: @circuit.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/circuits/1
  def destroy
    @circuit.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_circuit
      @circuit = Circuit.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def circuit_params
      params.fetch(:circuit, {})
    end
end
