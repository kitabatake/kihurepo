require 'rails_helper'

RSpec.describe "tes/new", :type => :view do
  before(:each) do
    assign(:te, Te.new(
      :content => "MyString",
      :comment => "MyString",
      :kihu => ""
    ))
  end

  it "renders new te form" do
    render

    assert_select "form[action=?][method=?]", tes_path, "post" do

      assert_select "input#te_content[name=?]", "te[content]"

      assert_select "input#te_comment[name=?]", "te[comment]"

      assert_select "input#te_kihu[name=?]", "te[kihu]"
    end
  end
end
