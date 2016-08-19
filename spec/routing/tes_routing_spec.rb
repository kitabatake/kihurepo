require "rails_helper"

RSpec.describe TesController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/tes").to route_to("tes#index")
    end

    it "routes to #new" do
      expect(:get => "/tes/new").to route_to("tes#new")
    end

    it "routes to #show" do
      expect(:get => "/tes/1").to route_to("tes#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/tes/1/edit").to route_to("tes#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/tes").to route_to("tes#create")
    end

    it "routes to #update" do
      expect(:put => "/tes/1").to route_to("tes#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/tes/1").to route_to("tes#destroy", :id => "1")
    end

  end
end
