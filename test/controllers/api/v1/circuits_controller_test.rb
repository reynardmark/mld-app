require "test_helper"

class Api::V1::CircuitsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @circuit = circuits(:one)
  end

  test "should get index" do
    get api_v1_circuits_url, as: :json
    assert_response :success
  end

  test "should create circuit" do
    assert_difference("Circuit.count") do
      post api_v1_circuits_url, params: { circuit: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show circuit" do
    get api_v1_circuit_url(@circuit), as: :json
    assert_response :success
  end

  test "should update circuit" do
    patch api_v1_circuit_url(@circuit), params: { circuit: {  } }, as: :json
    assert_response :success
  end

  test "should destroy circuit" do
    assert_difference("Circuit.count", -1) do
      delete api_v1_circuit_url(@circuit), as: :json
    end

    assert_response :no_content
  end
end
