require 'rails_helper'

RSpec.describe "Tes", :type => :request do
  describe "GET /tes" do
    it "works! (now write some real specs)" do
      get tes_path
      expect(response.status).to be(200)
    end
  end
end
