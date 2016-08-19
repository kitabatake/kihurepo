require 'rails_helper'

RSpec.describe "tes/show", :type => :view do
  before(:each) do
    @te = assign(:te, Te.create!(
      :content => "Content",
      :comment => "Comment",
      :kihu => ""
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Content/)
    expect(rendered).to match(/Comment/)
    expect(rendered).to match(//)
  end
end
