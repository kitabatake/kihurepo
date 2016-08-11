require 'test_helper'

class KihusControllerTest < ActionDispatch::IntegrationTest
  setup do
    @kihu = kihus(:one)
  end

  test "should get index" do
    get kihus_url
    assert_response :success
  end

  test "should get new" do
    get new_kihu_url
    assert_response :success
  end

  test "should create kihu" do
    assert_difference('Kihu.count') do
      post kihus_url, params: { kihu: { teban: @kihu.teban, won: @kihu.won } }
    end

    assert_redirected_to kihu_url(Kihu.last)
  end

  test "should show kihu" do
    get kihu_url(@kihu)
    assert_response :success
  end

  test "should get edit" do
    get edit_kihu_url(@kihu)
    assert_response :success
  end

  test "should update kihu" do
    patch kihu_url(@kihu), params: { kihu: { teban: @kihu.teban, won: @kihu.won } }
    assert_redirected_to kihu_url(@kihu)
  end

  test "should destroy kihu" do
    assert_difference('Kihu.count', -1) do
      delete kihu_url(@kihu)
    end

    assert_redirected_to kihus_url
  end
end
