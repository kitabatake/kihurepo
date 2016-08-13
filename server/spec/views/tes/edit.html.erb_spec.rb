require 'rails_helper'

RSpec.describe "tes/edit", :type => :view do
  before(:each) do
    @te = assign(:te, Te.create!(
      :content => "MyString",
      :comment => "MyString",
      :kihu => ""
    ))
  end

  it "renders the edit te form" do
    render

    assert_select "form[action=?][method=?]", te_path(@te), "post" do

      assert_select "input#te_content[name=?]", "te[content]"

      assert_select "input#te_comment[name=?]", "te[comment]"

      assert_select "input#te_kihu[name=?]", "te[kihu]"
    end
  end
end
