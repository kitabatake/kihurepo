require 'rails_helper'

RSpec.describe "tes/index", :type => :view do
  before(:each) do
    assign(:tes, [
      Te.create!(
        :content => "Content",
        :comment => "Comment",
        :kihu => ""
      ),
      Te.create!(
        :content => "Content",
        :comment => "Comment",
        :kihu => ""
      )
    ])
  end

  it "renders a list of tes" do
    render
    assert_select "tr>td", :text => "Content".to_s, :count => 2
    assert_select "tr>td", :text => "Comment".to_s, :count => 2
    assert_select "tr>td", :text => "".to_s, :count => 2
  end
end
