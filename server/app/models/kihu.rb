class Kihu < ApplicationRecord
  has_many :moves, :dependent => :destroy

  attr_accessor :kihu_text

  def self.parse (text)
    parsed = KihuParser.new.parse text
    result = {
      match_date: parsed[:date],
      rule: parsed[:rule],
      handicap: parsed[:handicap],
      sente: parsed[:sente],
      gote: parsed[:gote]
    }

    moves = []
    parsed[:moves].each do |move|
      m = {
        koma: move[:koma],
        to_x: move[:to][:x],
        to_y: move[:to][:y],
        naru: move[:naru],
        utsu: move[:utsu],
        time: move[:time]
      }
      unless m[:utsu]
        m[:from_x] = move[:from][:x]
        m[:from_y] = move[:from][:y]
      end
      moves << m
    end

    result[:moves] = moves
    result
  end

  def self.build_with_params (params)
    moves = params[:moves]
    kihu = Kihu.new params.except :moves
    moves.each do |move|
      kihu.moves.build move
    end
    kihu
  end

end
